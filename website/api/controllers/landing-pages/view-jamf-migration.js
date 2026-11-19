module.exports = {


  friendlyName: 'View jamf migration',


  description: 'Display "Replace Jamf" page.',


  exits: {

    success: {
      viewTemplatePath: 'pages/landing-pages/jamf-migration'
    }

  },


  fn: async function () {

    // Respond with view.
    return {};

  }


};
