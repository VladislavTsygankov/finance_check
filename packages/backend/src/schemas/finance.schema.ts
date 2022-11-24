import { Type, Static } from "@sinclair/typebox";

export const FinanceResponseSchema = Type.Object({
  ticker: Type.Optional(
    Type.String()
  ),
  value: Type.Optional(
    Type.String()
  )
});

export const FinanceRequestQuerySchema = Type.Object({
  ticker: Type.String()
})

export type FinanceRequestQuery = Static<typeof FinanceRequestQuerySchema>;