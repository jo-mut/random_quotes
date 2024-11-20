(ns random-quotes.frontend.core
  (:require
   [reagent.dom :as rdom]
   ["react" :as react]
   [reagent.core :as r]))

(def fetched-advice (r/atom nil))

(defn quote
  [advice]
  [:p {:class "p-5 text-blue-500"} advice])

(defn fetch-api-data []
  (when (nil? @fetched-advice)
    (-> (js/fetch "https://api.adviceslip.com/advice")
        (.then (fn [response]
                 (.json response)))
        (.then (fn [data]
                 (reset! fetched-advice (js->clj data))))
        (.catch (fn [error]
                  (js/console.log "Error fetching API data:" error))))))

(defn app []
  [:div {:class "flex items-center justify-center h-screen bg-custom-bg 
                 bg-test-color bg-cover bg-center"}
   [:div {:class "flex flex-col items-center justify-center p-10 bg-white shadow-lg 
                  rounded-2xl h-[200px] w-[600px]"}
    (when @fetched-advice
      (let [response (js->clj @fetched-advice)]
        (println "Quote" (get (get response "slip") :advice))
        [quote @fetched-advice]))
    [:button {:class "px-6 py-3 bg-[orangered] text-white rounded-md focus:outline-none 
                      focus:ring-2 focus:ring-indigo-500 active:bg-[orangered]"
              :on-click (fn [] (fetch-api-data))}
     "GIVE ME ADVICE"]]])



(defn ^:export init []
  (rdom/render [app] (.getElementById js/document "app")))
