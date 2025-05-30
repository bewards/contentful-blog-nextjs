module.exports = function (migration) {
  const location = migration
    .createContentType('cta')
    .name('CTA')
    .description('A call-to-action content item')
    .displayField('title');

  const internalName = location.createField('internalName').name('Internal Name').type('Symbol');

  const title = location.createField('title').name('Title').type('Symbol').required(true);
  const description = location.createField('description').name('Description').type('RichText').required(true);
  const link = location.createField('link').name('Link').type('Link').required(true).linkType('Entry').validations([
    {
      linkContentType: ['pageLanding', 'pageBlogPost'],
    },
  ]);
};
