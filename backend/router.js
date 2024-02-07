const router = require("express").Router();
const ep = require("./endpoints");
const dashboard = require("./controller");

router.use(express.text());

router.get(ep.END_YEAR, dashboard.filterByEndYear);
router.get(ep.TOPIC, dashboard.filterByTopic);
router.get(ep.SECTOR, dashboard.filterBySector);
router.get(ep.REGION, dashboard.filterByRegion);
router.get(ep.PEST, dashboard.filterByPEST);
router.get(ep.SOURCE, dashboard.filterBySource);
router.get(ep.RELEVANCE, dashboard.filterByRelevance);
router.get(ep.INTENSITY, dashboard.filterByIntensity);
router.get(ep.COUNTRY, dashboard.filterByCountry);
router.get(ep.START_YEAR, dashboard.filterByStartYear);
router.get(ep.LIKELIHOOD, dashboard.filterByLikelihood);

module.exports = router;









