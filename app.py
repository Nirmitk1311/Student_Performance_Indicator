from flask import Flask, request, render_template, redirect, url_for
import numpy as np
import pandas as pd
from sklearn.preprocessing import StandardScaler

import sys
import os

from src.pipeline import predict_pipeline
CustomData = predict_pipeline.CustomData
PredictPipeline = predict_pipeline.PredictPipeline

application = Flask(__name__)

app = application

## Route for a home page

@app.route('/')
def index():
    return redirect(url_for('predict_datapoint'))

@app.route('/predictdata',methods=['GET','POST'])
def predict_datapoint():
    if request.method=='GET':
        return render_template('home.html')
    else:
        data=CustomData(
            gender=request.form.get('gender', ''),
            race_ethnicity=request.form.get('ethnicity', ''),
            parental_level_of_education=request.form.get('parental_level_of_education', ''),
            lunch=request.form.get('lunch', ''),
            test_preparation_course=request.form.get('test_preparation_course', ''),
            reading_score=int(float(request.form.get('reading_score', 0))),
            writing_score=int(float(request.form.get('writing_score', 0)))
        )
        pred_df=data.get_data_as_data_frame()
        print(pred_df)
        
        predict_pipeline=PredictPipeline()
        results=predict_pipeline.predict(pred_df)
        return render_template('home.html',results=results[0])
    

if __name__=="__main__":
    app.run(host="0.0.0.0",debug=True)       