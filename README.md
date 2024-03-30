# aws-codepipeline-demo
Demo deployment with AWS services

Components involved in the generic pipeline built with AWS services
1. **CodeCommit** - AWS CodeCommit is a version control service hosted by Amazon Web Services that you can use to privately store and manage assets (such as documents, source code, and binary files) in the cloud. For our demonstration we will be using **Github** though.
2. **CodePipeline** - AWS CodePipeline is a continuous delivery service you can use to model, visualize, and automate the steps required to release your software. You can quickly model and configure the different stages of a software release process. CodePipeline automates the steps required to release your software changes continuously.
3. **CodeDeploy** - CodeDeploy is a deployment service that automates application deployments to Amazon EC2 instances, on-premises instances, serverless Lambda functions, or Amazon ECS services. This usually works in conjunction with services like CodePipeline and repositories like Github to publish latest changes for an application.

## Steps to setup an AWS CodePipeline
1. Navigate to the Elastic Beanstalk service to configure an application environment by specifying the appropriate name.
   
   ![image](https://github.com/mayur256/aws-codepipeline-demo/assets/39913092/3b90947b-07d8-4ac8-929c-ac210517d5b1)

3. Select the platform that is required to run your app
   
   ![image](https://github.com/mayur256/aws-codepipeline-demo/assets/39913092/57835292-b495-4555-9590-dc79f83a0e2b)

5. Specify the service access role that will be used to create the application
   
   ![image](https://github.com/mayur256/aws-codepipeline-demo/assets/39913092/7d88d747-9082-452a-94a7-9ec95cd7ba25)

7. You may specify other resources like networking, EC2 instance details. But these are ooptional and can be skipped. Click on the Submit button to create the application environment for Beanstalk. This will be used as the deployment target by AWS **Codepipeline** service. This step will setup a sample application with Nodejs that can be viewed by clicking on the URL given in the application details page.

8. Now Navigate to the Codepipeline service. Start by clicking on create pipeline button and specifying the pipeline name. You can proceed with remaining default options selected.

   ![image](https://github.com/mayur256/aws-codepipeline-demo/assets/39913092/c58990db-a4ea-4bda-aa0b-bce933bab9f3)

9. In the next phase, we specify the source which in our case is the Github repo. You may choose another source as per your need. Connect you Github repo by clicking on _Connect Github_ button. Follow the prompt to connect your repository.

   ![image](https://github.com/mayur256/aws-codepipeline-demo/assets/39913092/8abf0b9e-7e4c-428b-b97e-9cee0fd0cf45)

12. After connecting the repo you may specify your branch & Trigger points (that which will cause the pipeline to publish a new build)

13. We can skip the build phase, on so we do that for this demo.

14. In the next phase i.e the Deploy stage we select the Deploy provider service which is **AWS Elastic Beanstalk** in our case. Also choose the required app and environment to the deploy provider to be configured properly. Review your settings and click on submit button to create the pipeline.
    
   ![image](https://github.com/mayur256/aws-codepipeline-demo/assets/39913092/6dff0e1a-c2b2-4868-a976-1db682e4bbd9)

15. This will setup a basic pipeline which you can test by creating a new commit and then navigating to the Codepipeline service to the stages in action.
