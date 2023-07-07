import React from "react";
import { View, Button } from "react-native";
import axios from "axios";
import * as Animatable from "react-native-animatable";

const wledIP = "192.168.185.208";

const onPressButton = (animationIndex) => {
    const endpoint = `http://kno.wled.ge/interfaces/json-api/${animationIndex}`;

    axios
        .post(`http://${wledIP}/json/state`, {
            on: true,
            bri: 255,
            transition: 0,
            mainseg: 0,
            seg: [
                {
                    id: 0,
                    start: 0,
                    stop: 30,
                    grp: 1,
                    spc: 0,
                    of: 0,
                    on: true,
                    frz: false,
                    bri: 255,
                    cct: 127,
                    set: 0,
                    col: [
                        [255, 255, 255],
                        [0, 0, 0],
                        [0, 0, 0],
                    ],
                    fx: 163,
                    sx: 255,
                    ix: 255,
                    pal: 2,
                    c1: 128,
                    c2: 128,
                    c3: 16,
                    sel: true,
                    rev: false,
                    mi: false,
                    o1: false,
                    o2: false,
                    o3: false,
                    si: 0,
                    m12: 0,
                },
                { stop: 0 },
                { stop: 0 },
                { stop: 0 },
                { stop: 0 },
                { stop: 0 },
                { stop: 0 },
                { stop: 0 },
                { stop: 0 },
                { stop: 0 },
                { stop: 0 },
                { stop: 0 },
                { stop: 0 },
                { stop: 0 },
                { stop: 0 },
                { stop: 0 },
            ],
        })
        .then(() => {
            console.log("Animation triggered!");
        })
        .catch((error) => {
            console.error("Error triggering animation:", error);
        });
};

const App = () => (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        {animations.map((animation, index) => (
            <Animatable.View
                key={animation}
                animation={animation}
                style={{ marginBottom: 10 }}
            >
                <Button
                    title={`Animation ${index + 1}`}
                    onPress={() => onPressButton(index + 1)}
                />
            </Animatable.View>
        ))}
    </View>
);

export default App;
