(ns random-quotes.frontend.core
  (:require
   [reagent.dom :as rdom]))


(defn app 
  []
  [:div {:className "w-full h-[100h] flex justify-center items-center text-center"}
   :div {:className "w-[500] flex justify-center items-center text-center"} ])

;; Reagent render function for Next.js
(defn ^:export init []
  (rdom/render [app] (.getElementById js/document "app")))
