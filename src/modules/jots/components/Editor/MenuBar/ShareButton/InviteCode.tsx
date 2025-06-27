import { RichTooltip } from "@/common/components";
import { createJotInviteCode } from "@/modules/jots/api";
import { Jot } from "@/modules/jots/types";
import {
  Box,
  Button,
  Card,
  Chip,
  Icon,
  IconButton,
  keyframes,
  Stack,
  TextField,
} from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useEffect, useState } from "react";

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

export type InviteCodeProps = {
  jot: Jot;
};

export const InviteCode = (props: InviteCodeProps) => {
  const { jot } = props;

  const queryClient = useQueryClient();

  const createJotInviteCodeMutation = useMutation({
    mutationFn: createJotInviteCode,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["jots", jot.id] });
    },
  });
  const isLoading = createJotInviteCodeMutation.isPending;

  const [isCopied, setIsCopied] = useState(false);
  const handleCopyInviteCode = () => {
    if (jot.inviteCode) {
      navigator.clipboard.writeText(jot.inviteCode);
      setIsCopied(true);
    }
  };

  useEffect(() => {
    const temporaryCopyIconTimeout = setTimeout(() => {
      setIsCopied(false);
    }, 4000);

    return () => {
      clearTimeout(temporaryCopyIconTimeout);
    };
  }, [isCopied]);

  const handleCreateNewInviteCode = () =>
    createJotInviteCodeMutation.mutate(jot.id);

  return (
    <Box position="relative">
      {!jot.inviteCode && (
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,

            display: "flex",
            alignItems: "center",
            justifyContent: "center",

            zIndex: 2,
          }}
        >
          <Button
            variant="contained"
            sx={{
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.48)", // Added shadow to menu
            }}
            onClick={handleCreateNewInviteCode}
          >
            Create Invite Code
          </Button>
        </Box>
      )}
      <Stack
        direction="row"
        alignItems="center"
        sx={{
          filter: jot.inviteCode ? "none" : "blur(4px)",
        }}
      >
        <Card
          variant="outlined"
          sx={{
            position: "relative",

            mr: 2,

            width: 56,

            bgcolor: "rgba(0, 0, 0, .06)",

            display: "flex",
            justifyContent: "center",
            alignItems: "center",

            aspectRatio: 1 / 1,
            zIndex: 1,
          }}
        >
          <Icon fontSize="large" className="material-symbols-outlined">
            public
          </Icon>
        </Card>
        <Stack gap={1 / 4}>
          <TextField
            value={jot.inviteCode || "123456"}
            variant="standard"
            slotProps={{
              htmlInput: {
                sx: {
                  py: 0,
                },
              },
              input: {
                disableUnderline: true,

                sx: {
                  typography: "h6",
                },
              },
            }}
          />
          <Chip
            size="small"
            label={jot.isInviteCodeExpired ? "Expired" : "Active"}
            sx={{
              width: "fit-content",
            }}
          />
        </Stack>
        <RichTooltip titles={["Copy invite code"]}>
          <IconButton sx={{ ml: "auto" }} onClick={handleCopyInviteCode}>
            <Icon className="material-symbols-outlined">
              {isCopied ? "check" : "content_copy"}
            </Icon>
          </IconButton>
        </RichTooltip>
        <RichTooltip titles={["Refresh invite code"]}>
          <IconButton onClick={handleCreateNewInviteCode}>
            <Icon
              className="material-symbols-outlined"
              sx={{
                animation: isLoading ? `${spin} .5s infinite` : "none",
              }}
            >
              cached
            </Icon>
          </IconButton>
        </RichTooltip>
      </Stack>
    </Box>
  );
};
