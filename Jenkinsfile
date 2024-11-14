pipeline {
    agent { 
        docker { 
            image 'node:16-alpine' 
            args '--user root'
        }
    }

    stages {
        stage('Build') {
            steps {
                script {
                    sh '''
                    chown -R $(whoami) ~/.npm
                    chown -R $(whoami) /var/lib/jenkins/workspace
                    npm cache clean --force
                    npm i
                    npm test
                    '''
                }
            }
        }
        stage('Container') {
              steps {
                  script {
                     sh 'echo docker start'
                     sh '''
                     docker build -t adiarprrr23/new:latest .
                     docker run -d -p 3000:3000 adiarprrr23/new
                     '''
                     sh 'echo docker end'
                  }
              }  
        }
    }
}


