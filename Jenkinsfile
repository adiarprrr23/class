pipeline {
    agent { 
        docker { 
            image 'node:18-alpine' 
            args '--user root'
        }
    }

    stages {
        stage('Build') {
            steps {
                script {
                    sh '''
                    sudo chown -R $(whoami) ~/.npm
                    sudo chown -R $(whoami) /var/lib/jenkins/workspace
                    npm cache clean --force
                    npm i
                    npm test
                    '''
                }
            }
        }
    }
}


