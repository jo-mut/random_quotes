(ns random-quotes.frontend.core
  (:require
   [reagent.dom :as rdom]))

(defn quote 
  [advice]
  [:p {:class "p-5 text-blue-500"}
   advice])

(defn app []
  [:div {:class "flex items-center justify-center h-screen bg-custom-bg 
                 bg-test-color bg-cover bg-center"}
   [:div {:class "flex flex-col items-center justify-center p-10 bg-white shadow-lg 
                  rounded-2xl h-[200px] w-[600px]"}
    [quote "Here we will show the quote"]
    [:button {:class "px-6 py-3 bg-[orangered] text-white rounded-md focus:outline-none 
                      focus:ring-2 focus:ring-indigo-500 active:bg-[orangered]"}
     "GIVE ME ADVICE"]]])

(defn ^:export init []
  (rdom/render [app] (.getElementById js/document "app")))
