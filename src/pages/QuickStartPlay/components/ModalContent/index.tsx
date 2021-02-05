import React, { useEffect, useState } from "react";
import { Container } from "./styles";

import LookingOpponent from "../LookingOpponent";
import OpponentFound from "../OpponentFound";
import WaitingOpponent from "../WaitingOpponent";
import ChallengeAccepted from "../ChallengeAccepted";
import { useNavigation } from "@react-navigation/native";
import { useSocket } from "../../../../contexts/socket";
import { useAuth } from "../../../../contexts/auth";

interface ModalItemProps {
  data: any;
  onFinish?: () => void;
}
const ModalContent: React.FC<ModalItemProps> = ({ onFinish, data }) => {
  const { token } = useAuth();
  const { socket, events } = useSocket();
  const navigation = useNavigation();
  const [step, setStep] = useState(1);

  // useEffect(() => {
  //   if (step === 1 || step === 3)
  //     setTimeout(() => setStep((prev) => prev + 1), 2000);
  // }, [step]);

  useEffect(() => {
    socket?.emit(events.ON_FIND_GAME, {
      token,
      platform: data.type,
      game: data.cover,
      value: data.option.subscription,
    });
    socket?.on(events.ON_FIND_GAME, (data: any) => {
      console.log("resposta on_find_game", data);
    });
  }, []);

  return (
    <Container>
      {step === 1 && <LookingOpponent />}
      {step === 2 && (
        <OpponentFound sendChallange={() => setStep((prev) => prev + 1)} />
      )}
      {step === 3 && <WaitingOpponent />}
      {step === 4 && <ChallengeAccepted onPlay={() => onFinish?.()} />}
    </Container>
  );
};

export default ModalContent;
