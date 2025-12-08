declare namespace T {
  class DataSources {
    /** 创建一个获取数据来源的实例。此类用于获取地图数据来源信息。 */
    constructor();

    /**
     * 查询当前地图数据的来源。参数说明：
     * @param config：详见DataSourcesOptions类。
     * @param callback：设置回调函数。回调函数参数为JSON对象，具体内容如下：{ "ds": "数据来源"}
     */
    search(config: DataSourcesOptions, callback: DataSourcesSearchCallback): void;
  }

  /** 此类用于获取地图数据来源信息。 */
  interface DataSourcesOptions {
    /** 地图级别。 */
    level: number;

    /** 地图范围。 */
    bound: string;

    /** 地图图层。 */
    layers: string;

    /** 地图投影。 */
    projection: string;

  }

  type DataSourcesSearchCallback = (result: any) => void;

}
