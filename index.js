/* global instantsearch */
const search = instantsearch({
  appId: 'SLXGL1308I',
  apiKey: '7cf71d59e46e4e658da64301a7d31c28',
  indexName: 'gear',
  searchParameters: {
    hitsPerPage: 20},
  routing: false  
});

search.addWidget(
  instantsearch.widgets.hits({
    container: document.querySelector('#product'),
    templates: {
      item: '{{product}} by {{brand}} | {{price}} {{currency}}',
    },
  })
);

search.addWidget(
  instantsearch.widgets.searchBox({
    container: document.querySelector('#searchBox'),
    placeholder: 'Kayak, Top, Oru Kayak ',
    autofocus: false /* Only to avoid live preview taking focus */,
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: document.querySelector('#category'),
    attributeName: 'category',
    limit: 7,
    searchForFacetValues: true,
    showMore: true,
    autoHideContainer: true,
    collapsible: true
  })
);

search.addWidget(
  instantsearch.widgets.refinementList({
    container: document.querySelector('#brand'),
    attributeName: 'brand',
    limit: 7,
    searchForFacetValues: true,
    showMore: true,
    autoHideContainer: true, 
    collapsible: true
  })
);

search.addWidget(
  instantsearch.widgets.pagination({
    container: document.querySelector('#pagination'),
  })
);

search.start();
