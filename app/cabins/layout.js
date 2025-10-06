import ReservationContextProvider from "../_contexts/reservationContext/ReservationContextProvider";

function Layout({ children }) {
  return <ReservationContextProvider>{children}</ReservationContextProvider>;
}

export default Layout;
