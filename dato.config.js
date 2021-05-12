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



//   root.createPost('content/_index.md', 'yaml', {
//     frontmatter: {
//       name: dato.customisation.name,
//       un_nombre: dato.customisation.unNombre,
//       bgcColor: dato.customisation.backgroundCouleur.hex,
//     },
//     content: ''
//   });

 

  // Create a `work` directory (or empty it if already exists)...


  root.directory('content/skills', dir => {
    // ...and for each of the works stored online...
    dato.skills.forEach((skill, index) => {
      // ...create a markdown file with all the metadata in the frontmatter
      dir.createPost(`${skill.slug}.md`, 'yaml', {
        frontmatter: {
          title: skill.titre,
          draft: false,
          level: skill.niveau,
          weight: index
        },
        content: ''
      });
    });
  }); 

};