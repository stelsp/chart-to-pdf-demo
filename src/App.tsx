import React, { useEffect, useRef, useState } from "react";
import Chart from "./Chart";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import { toPng } from "html-to-image";
import Well from "./well";
import Well2 from "./well2";
import Area from "./Area";
import Reper from "./Reper";

const App = () => {
  const styles = StyleSheet.create({
    chartContainer: {
      flexDirection: "column",
      alignItems: "center",
      marginTop: 20,
    },
    chartTitle: {
      fontSize: 16,
      marginBottom: 10,
    },
  });

  const chartContainerRef1 = useRef(null);
  const chartContainerRef2 = useRef(null);
  const chartContainerRef3 = useRef(null);
  const chartContainerRef4 = useRef(null);
  const [chart1, setChart1] = useState<Promise<string> | null>(null);
  const [chart2, setChart2] = useState<Promise<string> | null>(null);
  const [chart3, setChart3] = useState<Promise<string> | null>(null);
  const [chart4, setChart4] = useState<Promise<string> | null>(null);

  useEffect(() => {
    if (chartContainerRef1.current === null) {
      return;
    }
    if (chartContainerRef2.current === null) {
      return;
    }
    if (chartContainerRef3.current === null) {
      return;
    }
    if (chartContainerRef4.current === null) {
      return;
    }

    const dataUrl1 = toPng(chartContainerRef1.current);
    const dataUrl2 = toPng(chartContainerRef2.current);
    const dataUrl3 = toPng(chartContainerRef3.current);
    const dataUrl4 = toPng(chartContainerRef4.current);

    setChart1(dataUrl1);
    setChart2(dataUrl2);
    setChart3(dataUrl3);
    setChart4(dataUrl4);
  }, [
    chartContainerRef1,
    chartContainerRef2,
    chartContainerRef3,
    chartContainerRef4,
  ]);

  // Generate the PDF content using react-pdf
  const pdfContent = (
    <Document>
      <Page size="A4">
        <View style={styles.chartContainer}>
          <>{chart1 && <Image src={() => chart1} />}</>
        </View>
      </Page>
      <Page size="A4">
        <View style={styles.chartContainer}>
          <>{chart2 && <Image src={() => chart2} />}</>
        </View>
      </Page>
      <Page size="A4">
        <View style={styles.chartContainer}>
          <>{chart3 && <Image src={() => chart3} />}</>
        </View>
      </Page>
      <Page size="A4">
        <View style={styles.chartContainer}>
          <>{chart4 && <Image src={() => chart4} />}</>
        </View>
      </Page>
    </Document>
  );

  return (
    <>
      <div
        style={{
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
        }}
      >
        <PDFDownloadLink document={pdfContent} fileName="test.pdf">
          Save as PDF
        </PDFDownloadLink>
      </div>
      <br />
      <div>
        <div
          ref={chartContainerRef1}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h3>Скважина 35 (Датчики давления)</h3>
          <Well />
        </div>

        <div
          ref={chartContainerRef2}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3>Скважина 14 (Датчики смещения)</h3>
          <Well2 />
        </div>

        <div
          ref={chartContainerRef3}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3>Области радара</h3>
          <Area />
        </div>

        <div
          ref={chartContainerRef4}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <h3>Реперы</h3>
          <Reper />
        </div>
      </div>
    </>
  );
};

export default App;
