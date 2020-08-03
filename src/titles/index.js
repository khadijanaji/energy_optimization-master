// @flow
import {get} from "lodash";

const getTitlesFileByDomain = (domain: string) => {
  switch (domain) {
  default:
    return {};
  }
};

export type getTitleParamsType = {
    domain: string,
    category: string,
    idKpi: string,
    code: string
};

export type getCategoryParamsType = getTitleParamsType;

const getTitle = (params: getTitleParamsType): string => {
  const {domain, category, idKpi, code} = params;
  const titles = getTitlesFileByDomain(domain);
  return get(titles, [
    category,
    idKpi,
    "indicators",
    code,
    "title"
  ], "");
};

const getChildIndicators = (domain: string, category: string, idKpi: string): any => {
  const titles = getTitlesFileByDomain(domain);
  return get(titles, [
    category,
    idKpi,
    "indicators"
  ], []);
};

const getCategory = (params: getCategoryParamsType): string => {
  const {domain, category, idKpi, code} = params;
  const titles = getTitlesFileByDomain(domain);
  return get(titles, [
    category,
    idKpi,
    "indicators",
    code,
    "category"
  ], "");
};

const getAttributes = (params: getCategoryParamsType): any => {
  const {domain, category, idKpi, code} = params;
  const titles = getTitlesFileByDomain(domain);
  return get(titles, [
    category,
    idKpi,
    "indicators",
    code
  ], {});
};
const getScreenTitle = (domain: string, category: string, idKpi: string) => (
  get(getTitlesFileByDomain(domain), [
    category,
    idKpi,
    "screenTitle"
  ], "")
);
const getScreenSubtitle = (domain: string, category: string, idKpi: string) => (
  get(getTitlesFileByDomain(domain), [
    category,
    idKpi,
    "screenSubtitle"
  ], "")
);

const getCategoryObject = (domain: string, category: string, idKpi: string): any => {
  const categoryObj = get(getTitlesFileByDomain(domain), [
    category,
    idKpi
  ], {});

  let {indicators} = categoryObj;
  if (indicators) {
    indicators = Object.keys(indicators).map((id) => ({
      ...indicators[id],
      "code": id,
      id,
      "isComputed": indicators[id].isComputed || false
    }));
  }
  return {
    ...categoryObj,
    indicators
  };
};

export {
  getTitle,
  getCategory,
  getAttributes,
  getScreenTitle,
  getScreenSubtitle,
  getCategoryObject,
  getChildIndicators
};
