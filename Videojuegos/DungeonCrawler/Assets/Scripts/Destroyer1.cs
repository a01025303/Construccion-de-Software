using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Destroyer1 : MonoBehaviour
{
    [SerializeField] private float lifeTimer;

    // Start is called before the first frame update
    void Start()
    {
        Destroy(gameObject, lifeTimer);
    }

    // Update is called once per frame
    void Update()
    {
        
    }
}
