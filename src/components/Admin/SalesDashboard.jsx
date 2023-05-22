import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchOrders } from "../../state/orders/ordersActions";
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react";

export const SalesDashboard = () => {
  const dispatch = useDispatch();
  const orders = useSelector((state) => state.orders.orders);

  useEffect(() => {
    dispatch(fetchOrders());
    console.log(123, orders);
  }, [dispatch]);

  return (
    <div>
      <Table>
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Producto</Th>
            <Th>Cantidad</Th>
            <Th>Comprador</Th>
          </Tr>
        </Thead>

        <Tbody>
          {orders.map((order) => {
            return (
              <Tr>
                <Td>{order.id}</Td>
                <Td>{order.product.name}</Td>
                <Td>{order.qty}</Td>
                <Td>{order.user.email}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </div>
  );
};
