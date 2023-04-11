import { View, Text, TextInput, Alert, ScrollView, KeyboardAvoidingView, Platform } from 'react-native'
import React, { useState } from 'react'
import styles from './styles'
import { Picker } from '@react-native-picker/picker'
import countryList from 'country-list'
import Button from '../../components/Button'



const countries = countryList.getData();

const AddressScreen = () => {

    const [country, setCountry] = useState(countries[0].code)
    const [fullName, setFullName] = useState('')
    const [phoneNumber, setPhoneNumber] = useState('')

    const [address, setAddress] = useState('')
    const [addressError, setAddressError] = useState('invalid')

    const [city, setCity] = useState('')

    /*console.log(fullName)*/

    const onCheckout = () => {
        if (!fullName) {
            Alert.alert('Please fill in the fullname field');
            return
        }

        if (!phoneNumber) {
            Alert.alert('Please fill in the phone number field');
            return
        }

        console.warn('Success. Cheackout')
    }

    const validateAddress = () => {
        if (address.length > 3) {
            setAddressError('Address is too short');
        }
    }

    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 10 : 0}>
            <ScrollView style={styles.root}>
                <View style={styles.row}>
                    <Picker
                        selectedValue={country} onValueChange={setCountry}>

                        {countries.map(country => (
                            <Picker.Item value={country.code} label={country.name} />
                        ))}
                    </Picker>
                </View>

                {/* Full Name */}
                <View style={styles.row}>
                    <Text style={styles.label}>Full name(First and last name)</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Full name'
                        value={fullName}
                        onChangeText={setFullName} />
                </View>

                {/* Phone Number */}
                <View style={styles.row}>
                    <Text style={styles.label}>Phone Number</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Phone Number'
                        value={phoneNumber}
                        onChangeText={setPhoneNumber}
                        keyboardType={'phone-pad'} />
                </View>

                {/* Address  */}
                <View style={styles.row}>
                    <Text style={styles.label}>Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Address'
                        onEndEditing={validateAddress}
                        value={address}
                        onChangeText={text => {
                            setAddress(text);
                            setAddressError('');
                        }} />

                    {!!addressError && <Text style={styles.errorLabel}>{addressError}</Text>}
                </View>

                {/* City */}
                <View style={styles.row}>
                    <Text style={styles.label}>City</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='City'
                        value={city}
                        onChangeText={setCity} />
                </View>

                <Button text='Checkout' onPress={onCheckout} />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default AddressScreen