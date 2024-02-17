pipeline{
    agent any
    stages{
        stage('Build Image'){
            steps{
                script{
                    dockerapp = docker.build("felipepereiracg/hi-name:${env.BUILD_ID}", '-f ./dockerfile ./' )
                }
            }
        }
    }
}