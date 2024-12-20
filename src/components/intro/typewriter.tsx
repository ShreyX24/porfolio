import React, { useState, useEffect } from "react";
import { Slide } from "../../animations/slide";

interface TypewriterProps {
  dataType: string[];
  dataPeriod: number;
}

export const Typewriter: React.FC<TypewriterProps> = ({
  dataType,
  dataPeriod,
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    const handleTyping = () => {
      const i = loopNum % dataType.length;
      const fullText = dataType[i];

      setText((current) =>
        isDeleting
          ? fullText.substring(0, current.length - 1)
          : fullText.substring(0, current.length + 1)
      );

      setTypingSpeed(isDeleting ? 30 : 70);

      if (!isDeleting && text === fullText) {
        setTimeout(() => setIsDeleting(true), dataPeriod);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleTyping, typingSpeed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum, typingSpeed, dataType, dataPeriod]);

  return (
    <Slide width="100%" animdelay={true}>
      <h1 className="typewrite  font-semibold">
        <span className="wrap">{text}</span>
      </h1>
    </Slide>
  );
};
