/*
 * Licensed to the Apache Software Foundation (ASF) under one or more
 * contributor license agreements.  See the NOTICE file distributed with
 * this work for additional information regarding copyright ownership.
 * The ASF licenses this file to You under the Apache License, Version 2.0
 * (the "License"); you may not use this file except in compliance with
 * the License.  You may obtain a copy of the License at
 *
 *    https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { AxiosResponse } from 'axios';
import { ContentTypeEnum } from '/@/enums/httpEnum';
import { defHttp } from '/@/utils/http/axios';

enum Metrics_API {
  FLAME_GRAPH = '/metrics/flamegraph',
  NOTICE = '/metrics/notice',
  DEL_NOTICE = '/metrics/delnotice',
}
/**
 * 导出
 * @param {String} appId application id
 * @param {Number} width The width of the screen
 * @returns {Promise<AxiosResponse<Blob>>} Promise<AxiosResponse<Blob>>
 */
export function fetchFlamegraph(params) {
  return defHttp.post<AxiosResponse<Blob>>(
    {
      url: Metrics_API.FLAME_GRAPH,
      params,
      headers: {
        'Content-Type': ContentTypeEnum.FORM_URLENCODED,
      },
      responseType: 'blob',
    },
    {
      isReturnNativeResponse: true,
    },
  );
}
