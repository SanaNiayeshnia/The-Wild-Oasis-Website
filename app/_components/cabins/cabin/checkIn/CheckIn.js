"use client";
import { HiX } from "react-icons/hi";
import CheckInDetails from "./CheckInDetails";
import CustomDatePicker from "./customDatePicker/CustomDatePicker";
import useReservationContext from "@/app/_contexts/reservationContext/useReservationContext";
import { differenceInCalendarDays, isSameDay } from "date-fns";
import { useForm, useWatch } from "react-hook-form";
import { createBooking, updateReservation } from "@/app/_lib/actions";

function CheckIn({
  cabin = {},
  settings = {},
  bookedDates = [],
  user = {},
  reservation,
}) {
  const isEditSession = reservation?.id;
  const { minBookingLength, maxBookingLength } = settings;
  let bookingRange;
  const reservationContext = useReservationContext();
  bookingRange = isEditSession
    ? [reservation?.startDate, reservation?.endDate]
    : reservationContext?.bookingRange || [];
  const priceWithDiscount = cabin?.regularPrice - cabin?.discount;
  const bookingNumNights =
    isSameDay(bookingRange?.[0], bookingRange?.[1]) ||
    bookingRange?.length === 1
      ? 1
      : differenceInCalendarDays(bookingRange?.[1], bookingRange?.[0]) || 0;

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
    control,
  } = useForm({
    defaultValues: {
      ...(!isEditSession
        ? {
            cabinId: cabin?.id,
            guestId: user?.guestId,
          }
        : {
            hasBreakfast: reservation?.hasBreakfast,
            numGuests: reservation?.numGuests,
            observation: reservation?.observation,
          }),
    },
  });
  const watchedValues = useWatch({ control });

  const breakfastPrice = watchedValues?.hasBreakfast
    ? bookingNumNights * watchedValues?.numGuests * settings?.breakfastPrice
    : 0;
  const totalPrice = priceWithDiscount * bookingNumNights + breakfastPrice;

  async function onSubmit(data) {
    const formattedData = {
      ...data,
      ...(isEditSession
        ? { bookingId: reservation?.id }
        : {
            startDate: new Date(bookingRange?.[0]),
            endDate: new Date(bookingRange?.[1]),
            status: "unconfirmed",
            isPaid: false,
          }),
      numGuests: Number(data?.numGuests),
      cabinPrice: priceWithDiscount * bookingNumNights,
      numNights: bookingNumNights,
      extrasPrice: breakfastPrice,
      totalPrice,
    };
    console.log(formattedData);
    if (isEditSession) {
      return await updateReservation(formattedData);
    } else return await createBooking(formattedData);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`flex flex-col-reverse min-h-80 border-2 border-primary-800 w-full ${
        !isEditSession ? "md:flex-row" : ""
      }`}
    >
      <div
        className={`flex flex-col justify-between ${
          !isEditSession ? "md:w-1/2" : ""
        }`}
      >
        {!isEditSession && (
          <CustomDatePicker
            minRangeLength={minBookingLength}
            maxRangeLength={maxBookingLength}
            cabinId={cabin?.id}
            key={cabin?.id}
            bookedDates={bookedDates}
          />
        )}
        <div className="flex flex-col sm:flex-row items-center flex-wrap py-1.5 px-3 justify-between gap-4 bg-accent-500 text-stone-800">
          <div className="flex items-center gap-2 flex-wrap">
            <div className="flex items-center gap-2">
              <p className="flex items-end gap-1">
                <span className="text-xl font-semibold">
                  ${priceWithDiscount?.toLocaleString()}
                </span>
                <span>/night</span>
              </p>
              {bookingNumNights > 0 && (
                <p p className="bg-accent-600 flex items-center py-0.5 px-1">
                  <HiX className="text-sm" /> {bookingNumNights}
                </p>
              )}
            </div>
            {watchedValues?.hasBreakfast && bookingNumNights > 0 && (
              <p>
                + <span className="font-semibold">${breakfastPrice}</span> for
                breakfast
              </p>
            )}
          </div>
          {bookingRange?.length > 0 && (
            <div className="flex items-center  gap-2">
              <p className="font-semibold text-xl">
                Total: ${totalPrice.toLocaleString()}
              </p>
              {bookingRange?.length > 0 && !isEditSession && (
                <button
                  onClick={() => reservationContext?.setBookingRange([])}
                  className="border-1 hover:bg-accent-600 transition-all duration-300 border-accent-900 px-1 py-0.5 rounded-sm"
                >
                  Clear
                </button>
              )}
            </div>
          )}
        </div>
      </div>

      <CheckInDetails
        cabin={cabin}
        user={user}
        register={register}
        isSubmitting={isSubmitting}
        isEditSession={isEditSession}
        bookingRange={bookingRange}
        breakfastPrice={settings?.breakfastPrice}
      />
    </form>
  );
}

export default CheckIn;
