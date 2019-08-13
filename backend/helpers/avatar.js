const gravatar = require('gravatar');

/**
 * returns the link to  any avatar associated with the supplied email
 */

module.exports = email => {
  const avatarUrl = gravatar.url(email, {
    s: '200',
    r: 'pg',
    d: 'mm'
  });
  return avatarUrl;
};
