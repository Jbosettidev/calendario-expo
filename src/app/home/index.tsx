import { View } from 'react-native';
import { Calendar, DateData, LocaleConfig } from 'react-native-calendars';
import { styles } from './styles';
import { useState } from 'react';
import { ptBR } from "../../utils/configLocalCalendario"

LocaleConfig.locales["pt-br"]=ptBR //? config local do traducao
LocaleConfig.defaultLocale="pt-br"

export function Home() {
    const [day,setDay] = useState<DateData>()

    return(
        <View style = {styles.container}>
            <Calendar style={styles.calendar}
                headerStyle={{
                    borderBottomWidth:0.5,
                    borderBottomColor:"#e8e8e8",
                    paddingBottom:10,
                    marginBottom:10,
            }}
            theme={{
                textMonthFontSize:18,
                monthTextColor:"#e8e8e8",
                todayTextColor:"#64cc4f",
                selectedDayBackgroundColor:"#64cc4f",
                selectedDayTextColor:"#e8e8e8",
                calendarBackground:"transparent",
                textDayStyle:{color:"#e8e8e8"},
                textDisabledColor:"#717171",
            }}
            minDate={new Date().toDateString()}
            hideExtraDays={true}
            onDayPress={setDay}
            markedDates={day && {[day.dateString]: {selected:true},}}
            
            />
        </View>
    );
}