interface RegionParents {
  /** 行政区划名称 */
  name: string;

  /** 行政区划类别(省市县) */
  adminType: string;

  /** 行政区划码 */
  cityCode: string;

  /** 国家信息 */
  country: CountryInfo;
}

interface CountryInfo {
  /** 国家名称 */
  name: string;

  /** 行政区划类别 */
  adminType: string;

  /** 国家代码 */
  cityCode: string;
}

interface RegionPoint {
  /** 行政区划范围 格式："lng lat, lng lat,..." */
  region: string;
}

interface AdministrativeDivisionData {

  /** 父级区划信息 */
  parents: RegionParents;

  /** 行政区划等级 */
  level: number;

  /** 行政区划简称 */
  nameabbrevation: string;

  /** 行政区划名称 */
  name: string;

  /** 行政区划类别 */
  adminType: string;

  /** 行政区划码 */
  cityCode: string;

  /** 行政区划中心点 经度 */
  lnt: number;

  /** 行政区划中心点 纬度 */
  lat: number;

  /** 行政区划英文简称 */
  englishabbrevation: string;

  /** 行政区划英文名称 */
  english: string;

  /** 行政区划范围 格式："lng,lat,lng,lat,... */
  bound: string;

  /** 行政区划范围 */
  points: RegionPoint[];

};

declare namespace T {
  class AdministrativeDivision {
    /** 创建一个获取行政区划的实例。此类用于获取行政区划信息。 */
    constructor();

    /**
     * 根据检索词发起检索。参数说明：
     * config：详见AdministrativeDivisionOptions类。
     * callback：设置回调函数。
     * 回调函数参数为AdministrativeDivisionResult，具体内容详见AdministrativeDivisionResult类。
     */
    search(config: AdministrativeDivisionOptions, callback: AdministrativeDivisionSearchCallback): void;
  }

  /** 此类用于获取行政区划信息。 */
  interface AdministrativeDivisionOptions {

    /** 查询行政区划的名称。 */
    searchWord?: string;

    /** 查询类型。0表示根据code查询，1表示根据名称查询。 */
    searchType?: number;

    /** 是否需要下一级信息。 */
    needSubInfo?: boolean;

    /** 是否需要所有子节点。 */
    needAll?: boolean;

    /** 是否需要行政区划范围。 */
    needPolygon?: boolean;

    /** 是否需要上一级所有信息。 */
    needPre?: boolean;
  }

  /** 此类表示T. AdministrativeDivision的检索结果，没有构造函数。 */
  interface AdministrativeDivisionResult {

    /** 返回状态码，100表示正常，101表示没有查到结果。 */
    getStatus: () => number;

    /** 返回响应信息。 */
    getMsg: () => string | null;

    /** 返回数据版本。文档说明有误，文档为LngLat，实为string。 */
    getDataVersion: () => string | null;

    /** 返回行政区划数据信息。文档说明有误，文档为string，实为一个对象。 */
    getData: () => AdministrativeDivisionData | null;

  }

  type AdministrativeDivisionSearchCallback = (result: AdministrativeDivisionResult) => void;

}
