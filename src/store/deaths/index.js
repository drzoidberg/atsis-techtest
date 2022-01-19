import allDeathsList from './allDeathsList/allDeathsList.reducer'
import fetchAllDeathsList from './allDeathsList/fetchAllDeathsList.action'

import deathByName from './deathByName/deathByName.reducer'
import fetchDeathByName from './deathByName/fetchDeathByName.action'

import totalCountSeries from './totalCountSeries/totalCountSeries.reducer'
import fetchTotalCountSeries from './totalCountSeries/fetchTotalCountSeries.action'

import deathCountByName from './deathCountByName/deathCountByName.reducer'
import fetchDeathCountByName from './deathCountByName/fetchDeathCountByName.action'

import randomDeath from './randomDeath/randomDeath.reducer'
import fetchRandomDeath from './randomDeath/fetchRandomDeath.action'

export {
  allDeathsList,
  fetchAllDeathsList,
  deathByName,
  fetchDeathByName,
  totalCountSeries,
  fetchTotalCountSeries,
  deathCountByName,
  fetchDeathCountByName,
  randomDeath,
  fetchRandomDeath,
}
