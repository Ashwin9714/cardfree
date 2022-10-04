Cardfree take home assesment 


## SUMMARY

For this specific assesment we will me launching a web server using docker image on elastic container service in a default VPC . This assignment make use pf AWS technologies along with Docker and simple node server to show the required text and host ip. 

## ASSIGNMENT DETAILS

This assignment is divided in two parts 
infra and the node project 

infra-structure: 

this folder consist of main.tf file which provisions infrastructure using terraform ( Infrastructure as a code ).

main.tf consists of following resources:

ECR ( elastic container registry ):

I have created a cardfree private repository to store image of the application on AWS. Also pushed the latest image in cardfree-repo



ECS ( Elastic container service ):

I have launched AWS FARGATE cluster instead of EC2 cluster which is linux based environment 



Autoscaling group ( capacity 80% ): we have added a upscale policy to spin up new resource at a watermark of 80%.



Application Load balancing:  Application load balancer is attached to target group and listerner and auto



Subnets: we are using Default subnets 

cloudwatch log group: I have created a cardfree log group to monitor the application

security groups:


## run configurations 

## Any necessary instructions for executing the provisioning mechanism

Please proceed to project_code 

Configure the AWS credentials using AWS configure.
enter your secret key and access key


Run Docker build

run docker build command on linux base 

docker build -t ecc_repo . --platform=linux/amd64   

push the image to ecr repo cardfree-repo created using terraform

Navigate to infra folder 

run terraform init

run terraform plan 

and then run terraform apply

Once the infrastructure is provisioned we will navigate to vpc load balancer A record.

## What you would do next to further improve it

I would next create a cicd automation pipeline with the source control repo in Gitlab/jenkins/github actions .
So any changes in the source code will automatically will be deployed to respective environment 

## Your approach to solving the task, and any issues you faced with implementation

I always breakdown the problems of deployements in two parts 
i.e infrastructure and source code 

I wrote a simple node application and docker file for this.
Further as soon as I completed the infrastucture the service was coming down(draining) immmediately after spin up 
Debugging the logs for this service shut down took some time.
Further it was fixed with building the docker image with linux distribution.

## The time it took you to write it

It took 5 hours for me to write and debug it 
