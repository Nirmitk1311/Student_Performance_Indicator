# Student Exam Performance Indicator

A full-stack machine learning web application that predicts a student's math score based on demographic and academic features. The project features a modern, animated UI and a robust ML pipeline for data ingestion, transformation, model training, and prediction.

## 🚀 Features
- **Modern, animated web UI** (Bootstrap, custom CSS, confetti, ripple effects)
- **Predicts math score** from gender, ethnicity, parental education, lunch type, test prep, reading & writing scores
- **Interactive form** with instant feedback
- **ML pipeline**: data ingestion, transformation, model selection, and prediction
- **Trained on real student performance data**
- **Modular, extensible codebase**

## 🛠️ Tech Stack
- **Frontend**: Flask, Bootstrap, custom CSS/JS
- **Backend**: Python, Flask
- **ML/DS**: pandas, numpy, scikit-learn, CatBoost, XGBoost
- **Other**: dill, seaborn, matplotlib

## 📁 Project Structure
```
mlproject/
├── app.py                  # Flask app entry point
├── requirements.txt        # Python dependencies
├── static/                 # Custom CSS & JS for UI/animations
│   ├── style.css
│   └── script.js
├── templates/              # HTML templates
│   └── home.html
├── src/
│   ├── components/         # Data ingestion, transformation, model training
│   ├── pipeline/           # Prediction pipeline
│   └── ...
├── artifacts/              # Trained models, preprocessors, data splits
├── notebook/               # EDA and model training notebooks
└── README.md
```

## 📊 Data & Model
- **Dataset**: Student performance data (`notebook/data/stud.csv`)
- **Features**: gender, race/ethnicity, parental education, lunch, test prep, reading & writing scores
- **Target**: math score
- **Pipeline**: Data is ingested, split, transformed (scaling, encoding), and used to train multiple regressors. The best model (by R²) is saved and used for predictions.

## 🖥️ User Interface
- **/predictdata**: Main page with a beautiful, animated form
- **Prediction**: Enter student details, get instant math score prediction with confetti animation

## ⚙️ Setup Instructions

### 1. Clone the repository
```bash
git clone <repo-url>
cd mlproject
```

### 2. Create and activate a conda environment (recommended)
```bash
conda create -n mlproject python=3.8 -y
conda activate mlproject
```

### 3. Install dependencies
```bash
# Using conda (recommended for ML)
conda install pandas numpy scikit-learn matplotlib seaborn flask catboost xgboost dill

# Or using pip
pip install -r requirements.txt
```

### 4. Prepare artifacts (optional, if not present)
- Run the data ingestion and model training pipeline (see `src/components/data_ingestion.py` and `src/components/model_trainer.py`)

### 5. Run the app
```bash
python app.py
```
- Visit [http://127.0.0.1:5000/predictdata](http://127.0.0.1:5000/predictdata)

## 📝 Notebooks
- `notebook/EDA STUDENT PERFOMRANCE.ipynb`: Exploratory data analysis
- `notebook/MODEL TRAINING.ipynb`: Model training and evaluation

## 🙏 Credits
- Inspired by open student performance datasets
- UI icons from [Icons8](https://icons8.com/)

## 📬 Contact
For questions or contributions, open an issue or pull request!
