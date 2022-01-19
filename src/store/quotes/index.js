import allQuotesList from './allQuotesList/allQuotesList.reducer'
import fetchAllQuotesList from './allQuotesList/fetchAllQuotesList.action'

import quoteById from './quoteById/quoteById.reducer'
import fetchQuoteById from './quoteById/fetchQuoteById.action'

import quotesBySeries from './quotesBySeries/quotesBySeries.reducer'
import fetchQuotesBySeries from './quotesBySeries/fetchQuotesBySeries.action'

import quotesByAuthor from './quotesByAuthor/quotesByAuthor.reducer'
import fetchQuotesByAuthor from './quotesByAuthor/fetchQuotesByAuthor.action'

export {
  allQuotesList,
  fetchAllQuotesList,
  quoteById,
  fetchQuoteById,
  quotesBySeries,
  fetchQuotesBySeries,
  quotesByAuthor,
  fetchQuotesByAuthor,
}
