import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import React, { useMemo } from "react";
import DataGrid from "components/DataGrid";
import { useCurrency, useMarkets } from "hook/useCurrency";
import Image from "next/image";
import {
  Box,
  Button,
  Chip,
  Grid,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { faker } from "@faker-js/faker";

function MarketSelector() {
  const markets = useMarkets();
  const { findCoin } = useCurrency();
  //
  const rows = useMemo(() => markets, [markets]);
  //
  const columns = useMemo(
    () => [
      {
        field: "pair",
        headerName: "بازار",
        valueGetter: ({ row }) => {
          const BaseCoin = findCoin({ CoinSymbol: row.BaseCoin });
          const QuoteCoin = findCoin({ CoinSymbol: row.QuoteCoin });
          return (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              {BaseCoin.Logo ? (
                <Image
                  src={BaseCoin.Logo}
                  width="25px"
                  height="25px"
                  alt="coin logo"
                />
              ) : null}
              <Typography
                variant="caption"
                sx={{ display: "flex", alignItems: "baseline", ml: 1 }}
              >
                <Typography variant="overline">
                  {BaseCoin.CoinSymbol ?? ""}
                </Typography>
                /{QuoteCoin.CoinSymbol ?? ""}
              </Typography>
            </Box>
          );
        },
      },
      {
        field: "price",
        headerName: "قیمت",
        valueGetter: () => {
          return faker.finance.amount(5, 100000, 4, "", true);
        },
        cellProps: {
          align: "center",
        },
      },
      {
        field: "change",
        headerName: "تغییرات",
        valueGetter: () => {
          return (
            <Chip
              color={
                Boolean(faker.datatype.number({ min: 0, max: 1 }))
                  ? "success"
                  : "error"
              }
              size="small"
              sx={{
                fontSize: (theme) => theme.typography.caption.fontSize,
                lineHeight: "100%",
                borderRadius: 1,
              }}
              label={
                faker.datatype.float({ min: 0, max: 80, precision: 0.01 }) + "%"
              }
            />
          );
        },
        cellProps: {
          align: "right",
        },
      },
    ],
    [findCoin]
  );
  return (
    <Card>
      <CardContent>
        <Grid container mb={1}>
          <Grid xs={6} item>
            <Button fullWidth variant="contained" size="small">
              همه
            </Button>
          </Grid>
          <Grid xs={6} item>
            <Button fullWidth variant="text" size="small" color="inherit">
              تومان
            </Button>
          </Grid>
          <Grid xs={6} item>
            <Button fullWidth variant="text" size="small" color="inherit">
              تتر
            </Button>
          </Grid>
          <Grid xs={6} item>
            <Button fullWidth variant="text" size="small" color="inherit">
              علاقمندی
            </Button>
          </Grid>
        </Grid>
        <TextField
          placeholder="جستجوی بازار ..."
          // fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <SearchIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
        <DataGrid
          size="small"
          stickyHeader
          containerProps={{
            sx: { maxHeight: "400px", mt: 1 },
          }}
          rows={rows}
          columns={columns}
        />
      </CardContent>
    </Card>
  );
}

export default React.memo(MarketSelector);
