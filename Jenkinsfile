pipeline {
    agent { 
        docker { 
            image 'node:16-alpine' 
            args '--user root'
        }
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    sh '''
                    echo "Adjusting permissions and preparing environment"
                    chown -R $(whoami) ~/.npm
                    chown -R $(whoami) /var/lib/jenkins/workspace
                    '''
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    sh '''
                    echo "Cleaning npm cache and installing dependencies"
                    npm cache clean --force
                    npm ci
                    '''
                }
            }
        }

        stage('Test') {
            steps {
                script {
                    sh '''
                    echo "Running tests"
                    npm test
                    '''
                }
            }
        }

        stage('Build and Run Container') {
            steps {
                script {
                    sh '''
                    echo "Building Docker container"
                    docker build -t adiarprrr23/new:latest .

                    echo "Running Docker container"
                    docker run -d -p 3000:3000 adiarprrr23/new
                    '''
                }
            }  
        }
    }
}
