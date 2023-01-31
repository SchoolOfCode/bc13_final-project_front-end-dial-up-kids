import { Card, Button } from "flowbite-react";

export function AboutComponent() {
  return (
    <div className='m-4'>
      <Card className="">
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Supporting those in need
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          We provide access to a national network of food banks to provide
          support to those who are struggling with food insecurity and poverty,
          we offer an up to date and easily accessible service to improve
          peoples current situations when they are looking for support.
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Our Food Bank Network is an independent support navigator that relies
          upon individuals, social support agencies, GPs, schools and similar
          organisations to update local information in order to help us with the
          mission of finding people their nearest food bank. In our searchable
          network we have the locations of over 2000 food bank centres.
        </p>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Our motivation is to bridge a gap in the structural support offered to
          the 15.5% of the UK population currently living with food insecurity.
          This means they ate less or went a day without eating because they
          couldnt access or afford food. In addition to this 10 million adults
          and 4 million children are living in poverty, they are the
          demographics that would mostly benefit from our network.
        </p>
        <Button onClick={()=>{window.location.href ="mailto:foodbanknetwork@mail.spinningatoms.com"}} className="ml-3 m-1">
        Email Us
      </Button>
      </Card>
    </div>
  );
}
