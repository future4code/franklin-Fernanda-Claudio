export const goToHome = (navigate) => {
  navigate('/');
};

export const goToLastPage = (navigate) => {
  navigate(-1);
};

export const goToList = (navigate) => {
  navigate('/trips/list');
};

export const goToLogin = (navigate) => {
  navigate('/login');
};
export const goToForm = (navigate) => {
  navigate('/trips/application');
};
export const goToHomeAdmin = (navigate) => {
  navigate('/admin/trips/list');
};

export const goToCreateTrip = (navigate) => {
  navigate('/admin/trips/create');
};
export const goToDetailsTrip = (navigate) => {
  navigate('/admin/trips/:id');
};
