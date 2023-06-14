# Online Python compiler (interpreter) to run Python online.
# Write Python 3 code in this online editor and run it.
print("Hello world")

def masALaIzquierda(a):
    if len(a) == 1:
        return True
    else:
        izq = 0
        der = 0
        mitIzq = []
        mitDer = []
        for i in range(int(len(a) / 2)):
            izq = izq + a[i]
            mitIzq.append(a[i])
        for i in range(int(len(a) / 2), len(a)):
            der = der + a[i]
            mitDer.append(a[i])
        print(mitIzq)
        print(mitDer)
        return izq > der and masALaIzquierda(mitIzq) and masALaIzquierda(mitDer)

# print(masALaIzquierda([8, 6, 7, 4, 5, 1, 3, 2]))
# print(masALaIzquierda([8, 4, 7, 6, 5, 1, 3, 2]))

def potencia(a, k):
    if k == 1:
        return a
    elif k % 2 == 0:
        return potencia(a, k / 2) * potencia (a, k / 2)
    elif k % 2 != 0:
        return a * potencia(a, (k - 1) / 2) * potencia(a, (k - 1) / 2)
    
print(potencia(2, 10))




