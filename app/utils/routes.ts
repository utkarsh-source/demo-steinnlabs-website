/* eslint-disable class-methods-use-this */

class Router {
  static _generatePath = ({
    pathName,
    queryParams,
  }: {
    pathName: string;
    queryParams?: { [x: string]: string | boolean | number };
  }) => {
    const searchParams = new URLSearchParams();
    if (queryParams) {
      Object.entries(queryParams).forEach(([key, value]) =>
        searchParams.set(key, String(value))
      );

      return `${pathName}?${searchParams}`;
    }

    return `${pathName}`;
  };

  getBaseRoute() {
    return Router._generatePath({ pathName: '/' });
  }

  getServicesRoute() {
    return Router._generatePath({ pathName: '#services' });
  }

  getBlogsRoute() {
    return Router._generatePath({ pathName: '#blogs' });
  }

  getCaseStudiesRoute() {
    return Router._generatePath({ pathName: '#case-studies' });
  }

  getAboutRoute() {
    return Router._generatePath({ pathName: '#about' });
  }

  getContactUsRoute() {
    return Router._generatePath({ pathName: '#contact-us' });
  }

  getCareersRoute() {
    return Router._generatePath({ pathName: '#careers' });
  }
}

const router = new Router();

export { router, Router };
