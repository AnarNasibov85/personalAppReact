import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';


const NavigationShow = () => {
  return (
    <Breadcrumb fontWeight='medium' py={4} px={10} fontSize='sm'>
    <BreadcrumbItem>
      <BreadcrumbLink href='#'>Articles</BreadcrumbLink>
    </BreadcrumbItem>
  
    <BreadcrumbItem>
      <BreadcrumbLink href='#'>News in javascript</BreadcrumbLink>
    </BreadcrumbItem>
  
   
  </Breadcrumb>
  );
};

export default NavigationShow;
