import React from "react";

import { useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { addGames, fetchGames, Status } from "../../redux/slices/gamesSlices";
import { selectAxiosParams } from "../../redux/slices/axiosParams";

import { fullParams, params } from "../../@types/params";
import { WrapperList } from "./components/WrapperList";

export const Main = () => {
  const items = useAppSelector((state) => state.gamesSlice.items);
  const { search, order, ascDesc, platforms } = useSelector(selectAxiosParams);
  const [heightTop, setHeightTop] = React.useState(false);
  const status = useAppSelector((state) => state.gamesSlice.status);
  const statusPagination = useAppSelector((state) => state.gamesSlice.statusPagination);
  const [page, setPage] = React.useState(1);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    window.addEventListener("scroll", throttle(checkPosition, 250));
    window.addEventListener("resize", throttle(checkPosition, 250));
    return () => {
      window.removeEventListener("scroll", throttle(checkPosition, 250));
      window.removeEventListener("resize", throttle(checkPosition, 250));
    };
  }, []);

  React.useEffect(() => {
    page !== 1 && addGamesMas({ search, order, ascDesc, page, platforms });
  }, [page]);
  React.useEffect(() => {
    GetGames({ search, order, ascDesc, platforms });
  }, [search, order, ascDesc, platforms]);

  function throttle(callee: any, timeout: number) {
    let timer: any = null;

    return function perform(...args: any) {
      if (timer) return;

      timer = setTimeout(() => {
        callee(...args);

        clearTimeout(timer);
        timer = null;
      }, timeout);
    };
  }
  function checkPosition() {
    const height = document.body.offsetHeight;
    const screenHeight = window.innerHeight;

    const scrolled = window.scrollY;

    const threshold = height - screenHeight / 4;

    const position = scrolled + screenHeight;
    if (scrolled > 1000 && !heightTop) {
      setHeightTop(true);
    }
    if (scrolled < 1000) {
      setHeightTop(false);
    }

    if (position >= threshold) {
      setPage((page) => page + 1);
    }
  }

  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const addGamesMas = async ({ search, order, ascDesc, page, platforms }: fullParams) => {
    await dispatch(addGames({ search, order, ascDesc, page, platforms }));
  };

  const GetGames = async ({ search, order, ascDesc, platforms }: params) => {
    await dispatch(fetchGames({ search, order, ascDesc, platforms }));
  };

  return (
    <WrapperList
      statusPagination={statusPagination}
      status={status}
      items={items}
      scrollTop={() => scrollTop()}
      heightTop={heightTop}
    />
  );
};
