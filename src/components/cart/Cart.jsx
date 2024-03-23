import React, { useEffect, useState } from "react";
import "./cart.css";
import {
  Button,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useCart } from "../../context/CartContextProvider";
import Payment from "../product/Payment";

const Cart = () => {
  const { cart, getCart, changeTourCount, deleteTourFromCart } = useCart();
  useEffect(() => {
    getCart();
  }, []);

  const [showModal, setShowModal] = useState(false);

  return (
    <>
      {cart.tours.length > 0 ? (
        <>
          <TableContainer component={Paper}>
            <Table aria-label="simple table" sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow>
                  <TableCell align="right">Picture</TableCell>
                  <TableCell align="right">Place</TableCell>
                  <TableCell align="right">Date</TableCell>
                  <TableCell align="right">Days</TableCell>
                  <TableCell align="right">Price</TableCell>
                  <TableCell align="right">Count</TableCell>
                  <TableCell align="right">SubPrice</TableCell>
                  <TableCell align="right">-</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {cart.tours.map((elem) => (
                  <TableRow
                    key={elem.item.id}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right" scope="row" component="th">
                      <img
                        src={elem.item.image}
                        alt={elem.item.place}
                        width={100}
                      />
                    </TableCell>
                    <TableCell align="right">{elem.item.place}</TableCell>
                    <TableCell align="right">{elem.item.date}</TableCell>
                    <TableCell align="right">{elem.item.days}</TableCell>
                    <TableCell align="right">{elem.item.price}$</TableCell>
                    <TableCell align="right">
                      <input
                        onChange={(e) =>
                          changeTourCount(elem.item.id, e.target.value)
                        }
                        type="number"
                        min={1}
                        max={20}
                        defaultValue={elem.count}
                      />
                    </TableCell>
                    <TableCell align="right">{elem.subPrice}</TableCell>
                    <TableCell align="right">
                      <Button onClick={() => deleteTourFromCart(elem.item.id)}>
                        DELETE
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          <Button onClick={() => setShowModal(true)}>
            BOOK NOW FOR {cart.totalPrice}$
          </Button>
          {showModal && <Payment onClose={() => setShowModal(false)} />}
        </>
      ) : (
        <p className="empty-cart">Выберите туры для бронирования </p>
      )}
    </>
  );
};

export default Cart;
