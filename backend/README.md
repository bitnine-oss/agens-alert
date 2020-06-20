# Agens-Alert Backend

Real-time monitor and visualization for Agenspop (AG3 utility)
Someday, Alert function will be added on this project.

## Backend project

Backend
- spring boot & webflux
- kotlin & co-routine
- spring-data-r2dbc
- r2dbc-h2 (embedded db: file)
- webclient (connect to agenspop)

 
## HTTP APIs

### agenspop api for monitoring

- 모니터링 가능한 데이터소스 조회 
  - GET "/agens/datasources"
  - http://tonyne.iptime.org:8082/agens/datasources
- 선택 노드들의 이웃노드들 조회 
  - POST "/agens/neighbors", params={ datasource, q=<id_list>}
```bash
curl -X POST -H "Content-Type: application/json" http://tonyne.iptime.org:8082/agens/neighbors -d '{"datasource":"modern","q":"modern_1,modern_2"}'
```
- 선택 노드들의 연결된 엣지들 조회
  - POST "/agens/connected_edges", params={ datasource, q=<id_list>}
```bash
curl -X POST -H "Content-Type: application/json" http://tonyne.iptime.org:8082/agens/connected_edges -d '{"datasource":"modern","q":"modern_1,modern_2,modern_3"}'
```
- 선택 엣지들의 연결된 노드들 조회
  - POST "/agens/connected_nodes", params={ datasource, q=<id_list>}
```bash
curl -X POST -H "Content-Type: application/json" http://tonyne.iptime.org:8082/agens/connected_vertices -d '{"datasource":"modern","q":"modern_7,modern_9"}'
```

### query api for monitoring

- 모니터링 쿼리 전체 리스트
  - GET "/query"
  - http://tonyne.iptime.org:8082/query
- 모니터링 쿼리 개별 조회/추가/삭제
  - GET, PUT, DELETE "/query/{id}"
  - http://tonyne.iptime.org:8082/query/101
- 모니터링 쿼리 상태 변경(suspend/resume)
  - GET "/query/{id}/change-state, param={ state }
  - http://tonyne.iptime.org:8082/query/101/change-state?state=false
- 모니터링 쿼리 정보와 저장된 이벤트 기간(from, to)
  - GET "/query/{id}/date-range
  - http://tonyne.iptime.org:8082/query/101/date-range

### row api for monitoring

- 쿼리 qid 에 대한 from 'yyyy-MM-dd' 부터 to 'yyyy-MM-dd' 까지의 이벤트 조회 <br>
  - GET "/rows/search/date", params={ qid, from, to }
  - http://tonyne.iptime.org:8082/rows/search/date?qid=101&from=2019-01-01&to=2019-06-01
- 쿼리 qid 에 대한 date 'yyyy-MM-dd', time 'HH:mm:ss' 부터의 이벤트 조회
  - GET "/rows/search/time", params={ qid, date, time }
  - http://tonyne.iptime.org:8082/rows/search/time?qid=101&date=2019-11-11&time=20:00:00
  
### aggregation api for monitoring

- 모든 쿼리에 대한 일별 이벤트 집계의 전체 기간 조회
  - GET "/aggs"
  - http://tonyne.iptime.org:8082/aggs
- 선택 쿼리에 대한 일별 이벤트 집계의 전체 기간 조회
  - GET "/aggs/qid/{qid}"
  - http://tonyne.iptime.org:8082/aggs/qid/101

### admin api for monitoring

- 제품 정보 조회 
  - GET "/admin/product/info"
  - http://tonyne.iptime.org:8082/admin/product/info
- 모니터링 작동 상태 변경 (실시간 스케줄링 정지/시작)
  - GET "/admin/activate", params={ q=true/false }
  - monitoring stop: http://tonyne.iptime.org:8082/admin/activate?q=false
  - monitoring start: http://tonyne.iptime.org:8082/admin/activate?q=true
- 등록쿼리 전체에 대해 일별 집계를 from 'yyyy-MM-dd'부터 배치작업
  - GET "/admin/batch/all", params={ from='yyyy-MM-dd' }
  - http://tonyne.iptime.org:8082/admin/batch/all?from=2019-01-01
- 실시간 모니터링 테스트를 위한 airroutes 데이터 리로드 (country, airport, contains)
  - GET "/admin/realtime/reset", params={ datasource=airroutes }
  - http://tonyne.iptime.org:8082/admin/realtime/reset?datasource=airroutes
- 실시간 모니터링 테스트를 위해 airroutes 의 route 데이터를 sec 초 동안 임의로 import 수행 (route)
  - GET "/admin/realtime/test", params={ datasource=airroutes, sec=200 }
  - http://tonyne.iptime.org:8082/admin/realtime/test?datasource=airroutes&sec=200

        
## Sample data 'airroutes' for realtime

air-routes data [download](https://github.com/krlawrence/graph/tree/master/sample-data) 

nodes
- continent
- country
- airport

edges
- contains : (:country)-[]->(:airport), (:continent)-[]->(:airport) 
- route : (:airport)-[]->(:airport)


batch all test with no query

<img src="https://github.com/maxmin93/agens-alert/blob/master/images/AgensAlert-api-batch_all.png">

## real-time monitoring test

start importing 'route' edges to 'airroutes' datasource for 200 sec

### addV, addE statement (gremlin)

- nodes: g.addV("$label").property(T.id,"${idValue}").property(...)
- edges: g.V("$srcIdValue").as("src").V("$dstIdValue").as("dst").addE("${label}").from("src").to("dst").property(T.id,"${idValue}").property(...)

<img height="400px" src="https://github.com/maxmin93/agens-alert/blob/master/images/AgensAlert-realtime_data.png">

### capturing real-time data for qid=109

<img src="https://github.com/maxmin93/agens-alert/blob/master/images/AgensAlert-api-realtime_test1.png">

<img src="https://github.com/maxmin93/agens-alert/blob/master/images/AgensAlert-api-realtime_test2.png">

<img src="https://github.com/maxmin93/agens-alert/blob/master/images/AgensAlert-api-realtime_test3.png">

<img src="https://github.com/bitnine-oss/agens-alert/blob/master/images/AgensAlert-API-realtime-graph.png">


## Backend Concept Diagram

Diagram

<img height="400px" src="https://github.com/maxmin93/agens-alert/blob/master/images/AgensAlert-concept.png">


## Agenspop and Agens-Alert

Agenspop log for quering of Agens-Alert

<img src="https://github.com/maxmin93/agens-alert/blob/master/images/AgensAlert-back-agenspop_log.png"> 


### Reference Documentation
For further reference, please consider the following sections:

* [spring-boot-kotlin-coroutines](https://www.baeldung.com/spring-boot-kotlin-coroutines)
* [webflux-r2dbc-kotlin](https://github.com/razvn/webflux-r2dbc-kotlin)
* [Spring Data R2DBC [Experimental]](https://docs.spring.io/spring-data/r2dbc/docs/1.0.x/reference/html/#reference)
* [r2dbc.io](https://r2dbc.io/)
