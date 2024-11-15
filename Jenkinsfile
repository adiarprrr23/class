pipeline {
    agent { 
        docker { 
            image 'node:16-alpine' 
            args '--user root' // Ensure this is needed; otherwise, remove for better security
        }
    }

    stages {
        stage('Prepare Environment') {
            steps {
                script {
                    sh '''
                    echo "Adjusting permissions and preparing environment"
                    # Adjust permissions on project-specific paths only
                    chown -R $(whoami) ~/.npm
                    chown -R jenkins:jenkins /var/lib/jenkins/workspace/EApp@tmp
                    chmod -R 755 /var/lib/jenkins/workspace/EApp@tmp
                    '''
                }
            }
        }
        
        stage('Install Dependencies') {
            steps {
                script {
                    sh '''
                    echo "Installing dependencies"
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

                    echo "Stopping any existing container running on port 3000"
                    docker ps -q --filter "ancestor=adiarprrr23/new:latest" | xargs -r docker stop

                    echo "Running Docker container"
                    docker run -d -p 3000:3000 adiarprrr23/new
                    '''
                }
            }  
        }
    }
}
