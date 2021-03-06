const htmlTag = require('html-tag');


const toHtml = (tags) => (
  tags.map(({ tagName, attributes, content }) => (
    htmlTag(tagName, attributes, content)
  )).join("")
);

module.exports = (dato, root, i18n) => {

  // Add to the existing Hugo config files some properties coming from data
  // stored on DatoCMS
//   ['config.dev.toml', 'config.prod.toml'].forEach(file => {
//     root.addToDataFile(file, 'toml', {
//       title: dato.site.globalSeo.siteName,
//       languageCode: i18n.locale
//     });
//   });



  root.createPost('content/_index.md', 'yaml', {
    frontmatter: {
      title: dato.reglageDuSite.title,
      titleAddition: dato.reglageDuSite.titleAddition,
      description: dato.reglageDuSite.description,
      image: dato.reglageDuSite.photo.url({w: 560, h: 560, fm: 'jpg', auto: 'compress'}),
      job: dato.reglageDuSite.job,
      location: dato.reglageDuSite.location,
      email: dato.reglageDuSite.email,
      tel: dato.reglageDuSite.tel,
      alertText: dato.reglageDuSite.alertText,
      alert: dato.reglageDuSite.alert,
      twitterSite: dato.site.globalSeo.twitterAccount,
      twitterCreator: dato.site.globalSeo.twitterAccount,
      schemaFacebook: dato.site.globalSeo.facebookPageUrl,
      schemaLogo: dato.reglageDuSite.photo.url({w: 100, h: 100, fm: 'jpg', auto: 'compress'}),
      facebookAuthor: dato.reglageDuSite.facebookAuthor,
      facebookPublisher: dato.reglageDuSite.facebookPublisher,
      schemaTwitter: dato.reglageDuSite.schemaTwitter,
      schemaLinkedIn: dato.reglageDuSite.schemaLinkedin,
      schemaGithub: dato.reglageDuSite.schemaGithub,
      schemaYouTube: dato.reglageDuSite.schemaYoutube,
      schemaInstagram: dato.reglageDuSite.schemaInstagram,
      schemaSection: 'blog',
    },
    content: '',
  });

// COLLECTION CARRIERES
  root.directory('content/scolarite', dir => {
    // ...and for each of the works stored online...
    dato.schools.forEach((school, index) => {
      // ...create a markdown file with all the metadata in the frontmatter
      dir.createPost(`${school.slug}.md`, 'yaml', {
        frontmatter: {
          title: school.titre,
          draft: false,
          date_from: school.dateFrom,
          date_to: school.dateTo,
          level: school.level,
          location: school.location,
          weight: index,
        },
        content: '',
      });
    });
  }); 

// COLLECTION CARRIERES
  root.directory('content/carriere', dir => {
    // ...and for each of the works stored online...
    dato.carrieres.forEach((carriere, index) => {
      // ...create a markdown file with all the metadata in the frontmatter
      dir.createPost(`${carriere.slug}.md`, 'yaml', {
        frontmatter: {
          title: carriere.titre,
          draft: false,
          date_from: carriere.dateDebut,
          date_to: carriere.dateFin,
          company: carriere.company,
          location: carriere.location,
          weight: index,
        },
        content: carriere.description,
      });
    });
  }); 

// COLLECTION LANGUAGES
  root.directory('content/languages', dir => {
    // ...and for each of the works stored online...
    dato.languages.forEach((language, index) => {
      // ...create a markdown file with all the metadata in the frontmatter
      dir.createPost(`${language.slug}.md`, 'yaml', {
        frontmatter: {
          title: language.titre,
          draft: false,
          level: language.niveau,
          weight: index,
        },
        content: '',
      });
    });
  }); 

// cOLLECTION SKILLS
  root.directory('content/skills', dir => {
    // ...and for each of the works stored online...
    dato.skills.forEach((skill, index) => {
      // ...create a markdown file with all the metadata in the frontmatter
      dir.createPost(`${skill.slug}.md`, 'yaml', {
        frontmatter: {
          title: skill.titre,
          draft: false,
          level: skill.niveau,
          weight: index,
        },
        content: '',
      });
    });
  }); 

};