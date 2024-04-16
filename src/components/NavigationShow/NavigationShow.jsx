import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

const NavigationShow = ({ routes }) => {
  return (
    <Breadcrumb fontWeight='medium' py={4} px={10} fontSize='sm'>
      {routes?.map((routeName, index) => (
        <BreadcrumbItem key={index}>
          <BreadcrumbLink href='#'>{routeName}</BreadcrumbLink>
        </BreadcrumbItem>
      ))}

      {/* <BreadcrumbItem>
        <BreadcrumbLink href='#'>News in javascript</BreadcrumbLink>
      </BreadcrumbItem> */}
    </Breadcrumb>
  );
};

export default NavigationShow;
