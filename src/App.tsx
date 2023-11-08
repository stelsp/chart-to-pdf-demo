import { useEffect, useRef, useState } from "react";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Image,
  PDFDownloadLink,
} from "@react-pdf/renderer";
import Line from "./Line";
import { toPng } from "html-to-image";
import useDemoConfig from "./useDemoConfig";
// @ts-expect-error FIXME:
import ResizableBox from "./ResizableBox";
import "./App.css";
import Table from "./Table";

const App = () => {
  const { data, randomizeData } = useDemoConfig({
    series: 10,
    dataType: "time",
  });

  console.log(data);

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

  const chartContainerRef = useRef(null);
  const [chart, setChart] = useState(null);

  useEffect(() => {
    if (chartContainerRef.current === null) {
      return;
    }

    const dataUrl = toPng(chartContainerRef.current);
    // @ts-expect-error FIXME:
    setChart(dataUrl);
  }, [chartContainerRef]);

  // Generate the PDF content using react-pdf
  const pdfContent = (
    <Document>
      <Page size="A4">
        <View style={styles.chartContainer}>
          <Text style={styles.chartTitle}>Sample Chart</Text>
          <>
            {chart && <Image src={() => toPng(chartContainerRef.current!)} />}
          </>
          <Table data={data} />
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
        <button onClick={randomizeData}>Randomize Data</button>
        <PDFDownloadLink document={pdfContent} fileName="test.pdf">
          Save as PDF
        </PDFDownloadLink>
      </div>
      <br />
      <div ref={chartContainerRef}>
        <Line data={data} />
      </div>
      <div style={{ paddingTop: "1rem" }}>
        <Table data={data} />
      </div>
    </>
  );
};

export default App;
