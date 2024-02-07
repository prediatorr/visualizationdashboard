const mongoose = require("mongoose");
const { DashboardData } = require("./model");
const Joi = require("joi");
module.exports = {
  filterByEndYear: async (req, res) => {
    const { error, value } = Joi.object({
      endYear: Joi.number().required(),
    }).validate(...req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }

    let data = await DashboardData.find({ end_year: endYear }).lean();
    if (!data.length) {
      return res
        .status(400)
        .json({ success: false, message: "Could not find the data, please enter valid input." });
    }
    return res.status(200).json({ success: true, data });
  },

  filterByTopic: async (req, res) => {
    const { error, value } = Joi.object({
      topic: Joi.string().required(),
    }).validate(...req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }

    let data = await DashboardData.find({ topic: topic }).lean();
    if (!data.length) {
      return res
        .status(400)
        .json({ success: false, message: "Could not find the data, please enter valid input." });
    }
    return res.status(200).json({ success: true, data });
  },

  filterBySector: async (req, res) => {
    const { error, value } = Joi.object({
      sector: Joi.string().required(),
    }).validate(...req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }

    let data = await DashboardData.find({ sector: sector }).lean();
    if (!data.length) {
      return res
        .status(400)
        .json({ success: false, message: "Could not find the data, please enter valid input." });
    }
    return res.status(200).json({ success: true, data });
  },

  filterByRegion: async (req, res) => {
    const { error, value } = Joi.object({
      region: Joi.string().required(),
    }).validate(...req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }

    let data = await DashboardData.find({ region: region }).lean();
    if (!data.length) {
      return res
        .status(400)
        .json({ success: false, message: "Could not find the data, please enter valid input." });
    }
    return res.status(200).json({ success: true, data });
  },

  filterByPEST: async (req, res) => {
    const { error, value } = Joi.object({
      pestle: Joi.string().required(),
    }).validate(...req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }

    let data = await DashboardData.find({ pestle: pestle }).lean();
    if (!data.length) {
      return res
        .status(400)
        .json({ success: false, message: "Could not find the data, please enter valid input." });
    }
    return res.status(200).json({ success: true, data });
  },

  filterBySource: async (req, res) => {
    const { error, value } = Joi.object({
      source: Joi.string().required(),
    }).validate(...req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }

    let data = await DashboardData.find({ source: source }).lean();
    if (!data.length) {
      return res
        .status(400)
        .json({ success: false, message: "Could not find the data, please enter valid input." });
    }
    return res.status(200).json({ success: true, data });
  },

  filterByRelevance: async (req, res) => {
    const { error, value } = Joi.object({
      relevance: Joi.number().required(),
    }).validate(...req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }

    let data = await DashboardData.find({ relevance: relevance }).lean();
    if (!data.length) {
      return res
        .status(400)
        .json({ success: false, message: "Could not find the data, please enter valid input." });
    }
    return res.status(200).json({ success: true, data });
  },

  filterByIntensity: async (req, res) => {
    const { error, value } = Joi.object({
      intensity: Joi.number().required(),
    }).validate(...req.body);
    if (error) {
      return res.status(400).json({ success: false, message: error.message });
    }

    let data = await DashboardData.find({ intensity: intensity }).lean();
    if (!data.length) {
      return res
        .status(400)
        .json({ success: false, message: "Could not find the data, please enter valid input." });
    }
    return res.status(200).json({ success: true, data });
  },

  filterByCountry: async(req, res) => {
    const { error, value } = Joi.object({
        country: Joi.string().required(),
      }).validate(...req.body);
      if (error) {
        return res.status(400).json({ success: false, message: error.message });
      }
  
      let data = await DashboardData.find({ country}).lean();
      if (!data.length) {
        return res
          .status(400)
          .json({ success: false, message: "Could not find the data, please enter valid input." });
      }
      return res.status(200).json({ success: true, data });
  },

  filterByStartYear: async(req, res) => {
    const { error, value } = Joi.object({
        startYear: Joi.number().required(),
      }).validate(...req.body);
      if (error) {
        return res.status(400).json({ success: false, message: error.message });
      }
  
      let data = await DashboardData.find({ start_year: startYear }).lean();
      if (!data.length) {
        return res
          .status(400)
          .json({ success: false, message: "Could not find the data, please enter valid input." });
      }
      return res.status(200).json({ success: true, data });
  },
  filterByLikelihood: async(req, res) => {
    const { error, value } = Joi.object({
        likelihood: Joi.number().required(),
      }).validate(...req.body);
      if (error) {
        return res.status(400).json({ success: false, message: error.message });
      }
  
      let data = await DashboardData.find({ likelihood: likelihood }).lean();
      if (!data.length) {
        return res
          .status(400)
          .json({ success: false, message: "Could not find the data, please enter valid input." });
      }
      return res.status(200).json({ success: true, data });
  }
  
};
