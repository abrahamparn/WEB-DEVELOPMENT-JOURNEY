const issues = require("./issues.mongo");
const mongoose = require("mongoose");

async function getAllIssue(project, query) {
  try {
    const filter = { project: project, ...query };

    return await issues
      .find(
        filter,
        {},
        {
          _id: 1,
          issue_title: 1,
          issue_text: 1,
          created_on: 1,
          updated_on: 1,
          created_by: 1,
          assigned_to: 1,
          open: 1,
          status_text: 1,
        }
      )
      .select("-__v -project");
  } catch (err) {
    throw new Error(err);
  }
}
async function createIssue(issue, project) {
  try {
    const theNewObject = { ...issue, project };
    const createdIssue = await issues.create(theNewObject);
    const { __V, ...objectIssue } = createdIssue.toObject();
    return {
      assigned_to: objectIssue.assigned_to,
      status_text: objectIssue.status_text,
      open: objectIssue.open,
      _id: objectIssue._id,
      issue_title: objectIssue.issue_title,
      issue_text: objectIssue.issue_text,
      created_by: objectIssue.created_by,
      created_on: objectIssue.created_on,
      updated_on: objectIssue.updated_on,
    };
  } catch (err) {
    throw new Error(err);
  }
}

async function updateIssue(data) {
  try {
    const _id = data._id;
    const doc = {};
    for (let key in data) {
      if (key !== "_id" && data[key] !== "") {
        doc[key] = data[key];
      }
    }

    if (!_id) {
      return { error: "missing _id" };
    }

    if (Object.keys(doc).length === 0) {
      return { error: "no update field(s) sent", _id: _id };
    }

    doc.updated_on = new Date().toISOString();

    const result = await issues.findByIdAndUpdate(
      _id,
      { $set: doc },
      { new: true }
    );
    if (!result) {
      return { error: "could not update", _id: _id };
    }

    return { result: "successfully updated", _id: _id };
  } catch (err) {
    return { error: "could not update", _id: data._id };
  }
}

async function deleteIssue(id) {
  console.log(id);
  try {
    if (!checkIfId(id)) {
      return { error: "could not delete", _id: id };
    }
    if (!(await checkIssueId(id))) {
      return { error: "could not delete", _id: id };
    }
    const deleteIssue = await issues.findByIdAndDelete(id);
    if (!deleteIssue) {
      return { error: "could not delete", _id: id };
    }
    return { result: "successfully deleted", _id: id };
  } catch (err) {
    return { error: "could not delete", _id: id };
  }
}

async function checkIssueId(id) {
  try {
    const theIssue = await issues.findOne({ _id: id });
    if (!theIssue) return false;
    return true;
  } catch (err) {
    return false;
  }
}

function checkIfId(id) {
  if (!mongoose.isValidObjectId(id)) {
    return false;
  }
  return true;
}

module.exports = {
  createIssue,
  deleteIssue,
  getAllIssue,
  updateIssue,
};
