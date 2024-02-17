pipeline{
    agent any
    stages{
        stage('Build Image'){
            steps{
                script{
                    dockerapp = docker.build("felipepereiracg/hi-name", '-f ./dockerfile ./' )
                }
            }
        }
    }
}