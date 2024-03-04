function isValid(param) {
  if (param === null || param === undefined || param ==="" || typeof param === 'object') {
    return false;
  } else {
    return true;
  }
}

function isValidBody(body) {
  if (!body || Object.keys(body).length === 0) {
    return false;
  }
  for (const key in body) {
    const value = body[key];
    if (!isValid(value)) {
      return false;
    }
  }
  return true;
}

function hasData(param) {
  if (!param || (Array.isArray(param) && param.length === 0)) {
    return false;
  }

  return true;
}

export default {
  isValid,
  isValidBody,
  hasData
}