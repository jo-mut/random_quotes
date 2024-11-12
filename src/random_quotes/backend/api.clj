(ns random-quotes.backend.api
  (:require [clj-http.client :as client]))


(defn fetch-advice []
  (let [response (client/get "https://api.adviceslip.com/advice"
                             {:accept :json})]
    (get response :body)))
